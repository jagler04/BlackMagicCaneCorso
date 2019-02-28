using System.Collections.Generic;
using BlackMagicCaneCorso.Business;
using BlackMagicCaneCorso.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlackMagicCaneCorso.Controllers
{
    [Route("Picture")]
    public class PictureController : Controller
    {
        private readonly PictureBusiness _pictureBusiness;
        public PictureController(PictureBusiness pictureBusiness)
        {
            _pictureBusiness = pictureBusiness;
        }
        [Route("Add")]
        [HttpPost, Authorize]
        [ProducesResponseType(typeof(List<PictureInfo>), 200)]
        public IActionResult AddImage([FromBody] IFormFile file, DogInfo dog)
        {
            return Ok(_pictureBusiness.AddImage(dog, file));
        }
        [Route("Delete")]
        [HttpDelete, Authorize]
        [ProducesResponseType(typeof(List<PictureInfo>), 200)]
        public IActionResult DeleteImage([FromBody] PictureInfo img)
        {
            return Ok(_pictureBusiness.DeleteImage(img));
        }
    }
}
