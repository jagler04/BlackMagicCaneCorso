using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public class PictureRepository
    {
        private readonly DogContext _context;
        public PictureRepository(DogContext context)
        {
            _context = context;
        }
        public Picture AddImage(Picture img)
        {
            _context.Pictures.Add(img);
            _context.SaveChanges();
            return img;
        }
        public void DeleteImage(Picture img)
        {
            _context.Pictures.Remove(img);
            _context.SaveChanges();
        }

        public List<Picture> GetPicturesByDogId(int dogId)
        {
            return _context.Pictures.Where(p => p.DogID == dogId).ToList();
        }

        public void ResetDogProfilePicture(int dogId)
        {
            var pofilePictures = _context.Pictures.Where(p => p.ProfilePic == true && p.DogID == dogId).ToList();
            foreach(var profilePic in pofilePictures)
            {
                profilePic.ProfilePic = false;
            }
            _context.SaveChanges();
        }

        public void SetProfilePicture(int imgId)
        {
            var img = _context.Pictures.FirstOrDefault(p => p.ID == imgId);
            img.ProfilePic = true;
            _context.SaveChanges();
        }
    }
}
