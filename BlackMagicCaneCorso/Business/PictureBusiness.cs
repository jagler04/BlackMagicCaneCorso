﻿using BlackMagicCaneCorso.Data;
using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.Azure;
using Microsoft.AspNetCore.Http;
using BlackMagicCaneCorso.Utilities;
using System.IO;

namespace BlackMagicCaneCorso.Business
{
    public class PictureBusiness
    {
        private readonly PictureRepository _pictureRepository;
        private readonly PuppiesRepository _puppiesRepository;
        private readonly BlobRepository _blobRepository;
        public PictureBusiness(PictureRepository pictureRepository, BlobRepository blobRepository,
            PuppiesRepository puppiesRepository)
        {
            _pictureRepository = pictureRepository;
            _blobRepository = blobRepository;
            _puppiesRepository = puppiesRepository;
        }
        public List<PictureInfo> DeleteImage(PictureInfo img)
        {
            var dog = _puppiesRepository.GetDogById(img.DogID);
            if (_blobRepository.DeleteFile(dog.Name, img.FileName).Result)
            {
                _pictureRepository.DeleteImage(Converters.ConvertToPicture(img));
            }

            return GetImagesForId(img.DogID);
        }
        public List<PictureInfo> AddImage(DogInfo dog, IFormFile file)
        {
            var fileName = Guid.NewGuid() +  Path.GetExtension(file.FileName);
            if (_blobRepository.AddFile(dog.Name, file, fileName).Result)
            {
                _pictureRepository.AddImage(new Picture
                {
                    DogID = dog.ID,
                    FileName = file.FileName,
                    ProfilePic = false
                });
            }
            return GetImagesForId(dog.ID);
        }
        public List<PictureInfo> GetImagesForId(int Id)
        {
            var lst = new List<PictureInfo>();
            foreach (var pic in _pictureRepository.GetPicturesByDogId(Id))
            {
                lst.Add(new PictureInfo
                {
                    ID = pic.ID,
                    DogID = pic.DogID,
                    FileName = pic.FileName,
                    ProfilePic = pic.ProfilePic
                });
            }
            return lst;
        }
    }

}