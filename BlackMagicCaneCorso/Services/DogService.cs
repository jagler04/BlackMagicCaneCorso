using BlackMagicCaneCorso.Data;
using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Services
{
    public class DogService
    {
        private readonly DogRepository _dogRepository;
        private readonly ImageRepository _imageRepository;
        public DogService(DogRepository dogRepository, ImageRepository imageRepository)
        {
            _dogRepository = dogRepository;
            _imageRepository = imageRepository;
        }
        public List<DogModel> GetDogs()
        {
            var dogs = _dogRepository.GetDogs();
            foreach(var dog in dogs)
            {
                dog.Images = _imageRepository.GetImagesById(dog.Id);
                dog.MenuImage = dog.Images.Any(i => i.IsProfile) ? dog.Images.FirstOrDefault(i => i.IsProfile == true).Url : null;
            }

            return dogs;
        }

        public List<DogModel> AddDog(DogModel dog)
        {
            _dogRepository.AddDog(dog);
            return GetDogs();
        }

        public List<DogModel> UpdateDog(DogModel dog)
        {
            _dogRepository.UpdateDog(dog);
            return GetDogs();
        }

    }
}
