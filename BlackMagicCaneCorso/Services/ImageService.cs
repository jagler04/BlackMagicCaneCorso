using BlackMagicCaneCorso.Data;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Services
{
    public class ImageService
    {
        private readonly ImageRepository _imageRepository;
        private readonly BlobRepository _blobRepository;
        private readonly DogRepository _dogRepository;

        public ImageService(ImageRepository imageRepository, BlobRepository blobRepository, DogRepository dogRepository)
        {
            _blobRepository = blobRepository;
            _imageRepository = imageRepository;
            _dogRepository = dogRepository;
        }
        public void AddImage(int dogId, bool isProfile, IFormFile file)
        {
            var dog = _dogRepository.GetDogsById(dogId);
            var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            if (_blobRepository.AddFile(dog.Name, file, fileName).Result)
            {
                _imageRepository.AddImage(dogId, isProfile, fileName);
            }
        }
    }
}
