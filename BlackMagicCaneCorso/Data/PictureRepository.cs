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
    }
}
