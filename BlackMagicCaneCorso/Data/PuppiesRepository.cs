﻿using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public class PuppiesRepository
    {
        private readonly DogContext _context;
        public PuppiesRepository(DogContext context)
        {
            _context = context;
        }

        public Dog AddDog(Dog newDog)
        {
            _context.Dogs.Add(newDog);
            return newDog;
        }
        public Dog UpdateDog(Dog updateDog)
        {
            _context.Dogs.Update(updateDog);
            return updateDog;
        }
        public List<Dog> GetDogs()
        {
            return _context.Dogs.ToList();
        }

        public List<Dog> GetDogsByGender(string gender)
        {
            return _context.Dogs.Where(d => d.Gender == gender).ToList();
        }
    }
}