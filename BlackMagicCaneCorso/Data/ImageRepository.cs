using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public class ImageRepository
    {
        private readonly DogContext _context;
        public ImageRepository(DogContext context) 
        {
            _context = context;
        }

        public List<ImageModel> GetImagesById(int id)
        {
            return _context.Pictures.Where(p => p.DogID == id).Select(d => new ImageModel()
            {
                Id = d.ID,
                Url = d.FileName,
                IsProfile = d.ProfilePic
            }).ToList();
        }

        public ImageModel AddImage(int dogId, bool isProfile, string fileName)
        {
            var pic = new Picture { DogID = dogId, FileName = fileName, ProfilePic = isProfile };
            _context.Pictures.Add(pic);
            _context.SaveChanges();

            return new ImageModel
            {
                Id = pic.ID,
                Url = pic.FileName,
                IsProfile = pic.ProfilePic
            };
        }
        public void DeleteImage(int id)
        {
            var pic = _context.Pictures.FirstOrDefault(p => p.ID == id);
            if(pic != null)
            {
                _context.Pictures.Remove(pic);
                _context.SaveChanges();
            }
        }
    }
}
