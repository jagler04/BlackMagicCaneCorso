using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public class DogRepository
    {
        private readonly DogContext _context;
        public DogRepository(DogContext dogContext)
        {
            _context = dogContext;
        }
        public List<DogModel> GetDogs()
        {
            return _context.Dogs.Select(dog => new DogModel
            {
                Id = dog.ID,
                Name = dog.Name,
                Titles = dog.Titles,
                Color = dog.Color,
                BiteType = dog.BiteType,
                Birthdate = dog.Birthdate,
                Weight = dog.Weight,
                Description = dog.Description,
                Gender = dog.Gender
            }).ToList();
        }
        public DogModel GetDogsById(int dogId)
        {
            return _context.Dogs.Select(dog => new DogModel
            {
                Id = dog.ID,
                Name = dog.Name,
                Titles = dog.Titles,
                Color = dog.Color,
                BiteType = dog.BiteType,
                Birthdate = dog.Birthdate,
                Weight = dog.Weight,
                Description = dog.Description,
                Gender = dog.Gender
            }).FirstOrDefault(d => d.Id ==  dogId);
        }

        public void AddDog(DogModel dog)
        {
            var addedDog = new Dog
            {
                Name = dog.Name,
                Titles = dog.Titles,
                Color = dog.Color,
                BiteType = dog.BiteType,
                Birthdate = dog.Birthdate,
                Weight = dog.Weight,
                Description = dog.Description,
                Gender = dog.Gender
            };
            _context.Dogs.Add(addedDog);
            _context.SaveChanges();
            dog.Id = addedDog.ID;
        }

        public void UpdateDog(DogModel dog)
        {
            var updateDog = _context.Dogs.FirstOrDefault(d => d.ID == dog.Id);
            if(updateDog != null)
            {
                updateDog.Name = dog.Name;
                updateDog.Titles = dog.Titles;
                updateDog.Color = dog.Color;
                updateDog.BiteType = dog.BiteType;
                updateDog.Birthdate = dog.Birthdate;
                updateDog.Weight = dog.Weight;
                updateDog.Description = dog.Description;
                updateDog.Gender = dog.Gender;

                _context.Dogs.Update(updateDog);
                _context.SaveChanges();
            }
        }

        public void DeleteDog(int id)
        {
            var dog = _context.Dogs.FirstOrDefault(d => d.ID == id);
            if(dog != null)
            {
                _context.Dogs.Remove(dog);
                _context.SaveChanges();
            }

        }
    }
}
