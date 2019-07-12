using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackMagicCaneCorso.Business;
using BlackMagicCaneCorso.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlackMagicCaneCorso.Controllers
{
    [Route("Announcements")]
    [ApiController]
    public class AnnouncementController : Controller
    {
        private readonly AnnouncementBusiness _announcementBusiness;
        public AnnouncementController(AnnouncementBusiness announcementBusiness)
        {
            _announcementBusiness = announcementBusiness;
        }
        [Route("Add")]
        [HttpPost, Authorize]
        [ProducesResponseType(typeof(List<AnnouncementModel>), 200)]
        public IActionResult AddAnnouncement(string announcementText)
        {
            try
            {
                return Ok(_announcementBusiness.AddAnnouncement(announcementText));
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "");
            }
            
        }
        [Route("Update")]
        [HttpPut, Authorize]
        [ProducesResponseType(typeof(List<AnnouncementModel>), 200)]
        public IActionResult UpdateAnnouncement(int id, string announcementText)
        {
            try
            {
                return Ok(_announcementBusiness.UpdateAnnouncement(id, announcementText));
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "");
            }

        }
        [Route("Get")]
        [HttpGet]
        [ProducesResponseType(typeof(List<AnnouncementModel>), 200)]
        public IActionResult GetAnnouncement()
        {
            try
            {
                return Ok(_announcementBusiness.GetAnnouncements());
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "");
            }

        }
        [Route("Delete")]
        [HttpDelete, Authorize]
        [ProducesResponseType(typeof(List<AnnouncementModel>), 200)]
        public IActionResult DeleteAnnouncement(int id)
        {
            try
            {
                return Ok(_announcementBusiness.DeleteAnnouncement(id));
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "");
            }

        }
    }
}