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
            var index = dogs.FindIndex(0, d => d.Gender == "Female");

            dogs.Insert(index, new DogModel
            {
                Id = 999999,
                Name = "All",
                Gender = "Female",
                MenuImage = ""
            });
            index = dogs.FindIndex(0, d => d.Gender == "Male");
            dogs.Insert(index, new DogModel
            {
                Id = 999998,
                Name = "All",
                Gender = "Male",
                MenuImage = ""
            });
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
