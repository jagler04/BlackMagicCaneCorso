using BlackMagicCaneCorso.Data;
using BlackMagicCaneCorso.Models;
using BlackMagicCaneCorso.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Business
{
    public class AnnouncementBusiness
    {
        private readonly AnnouncementRepository _announcementRepository;
        public AnnouncementBusiness(AnnouncementRepository announcementRepository)
        {
            _announcementRepository = announcementRepository;
        }
        public List<AnnouncementModel> AddAnnouncement(string announcement)
        {
            _announcementRepository.Add(announcement);
            var lst = new List<AnnouncementModel>();
            foreach(var announc in _announcementRepository.Get())
            {
                lst.Add(Converters.ConvertToAnnouncementModel(announc));
            }
            return lst;
        }

        public List<AnnouncementModel> UpdateAnnouncement(int id, string announcementText)
        {
            _announcementRepository.Update(id, announcementText);
            var lst = new List<AnnouncementModel>();
            foreach (var announc in _announcementRepository.Get())
            {
                lst.Add(Converters.ConvertToAnnouncementModel(announc));
            }
            return lst;
        }

        public List<AnnouncementModel> GetAnnouncements()
        {
            var lst = new List<AnnouncementModel>();
            foreach (var announc in _announcementRepository.Get())
            {
                lst.Add(Converters.ConvertToAnnouncementModel(announc));
            }
            return lst;
        }

        public List<AnnouncementModel> DeleteAnnouncement(int id)
        {
            _announcementRepository.Delete(id);
            var lst = new List<AnnouncementModel>();
            foreach (var announc in _announcementRepository.Get())
            {
                lst.Add(Converters.ConvertToAnnouncementModel(announc));
            }
            return lst;
        }
    }
}
