using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Utilities
{
    public class Converters
    {
        public static Dog ConvertToDog(DogInfo dog)
        {
            return new Dog
            {
                ID = dog.ID,
                Name = dog.Name,
                Titles = dog.Titles,
                Color = dog.Color,
                BiteType = dog.BiteType,
                Birthdate = dog.Birthdate,
                Weight = dog.Weight,
                Description = dog.Description,
                Gender = dog.Gender
            };
        }
        public static DogInfo ConvertToDogInfo(Dog dog)
        {
            return new DogInfo
            {
                ID = dog.ID,
                Name = dog.Name,
                Titles = dog.Titles,
                Color = dog.Color,
                BiteType = dog.BiteType,
                Birthdate = dog.Birthdate,
                Weight = dog.Weight,
                Description = dog.Description,
                Gender = dog.Gender
            };
        }

        public static Picture ConvertToPicture(PictureInfo pic)
        {
            return new Picture
            {
                ID = pic.ID,
                DogID = pic.DogID,
                FileName = pic.FileName,
                ProfilePic = pic.ProfilePic
            };
        }
        public static PictureInfo ConvertToPictureInfo(Picture pic)
        {
            return new PictureInfo
            {
                ID = pic.ID,
                DogID = pic.DogID,
                FileName = pic.FileName,
                ProfilePic = pic.ProfilePic
            };
        }
    }
}
