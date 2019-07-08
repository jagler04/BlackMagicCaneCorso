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
        AnnouncementController(AnnouncementBusiness announcementBusiness)
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
    }
}