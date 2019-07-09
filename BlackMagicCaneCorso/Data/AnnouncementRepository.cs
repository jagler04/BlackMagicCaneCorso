using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public class AnnouncementRepository
    {
        private readonly DogContext _context;
        public AnnouncementRepository(DogContext context)
        {
            _context = context;
        }

        public void Add(string announcement)
        {
            var announce = new Announcement
            {
                AnnouncementString = announcement
            };
            _context.Announcements.Add(announce);
            _context.SaveChanges();
        }
        public List<Announcement> Get()
        {
            return _context.Announcements.ToList();
        }
        public void Update(int annoincementId, string announcement)
        {
            var announce = _context.Announcements.FirstOrDefault(a => a.ID == annoincementId);
            if(announce == null)
            {
                Add(announcement);
            }
            else
            {
                announce.AnnouncementString = announcement;
                _context.SaveChanges();
            }
        }
        public void Delete(int announcementId)
        {
            var announce = _context.Announcements.FirstOrDefault(a => a.ID == announcementId);
            if(announce != null)
                _context.Announcements.Remove(announce);
        }
    }
}
