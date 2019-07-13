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
        [Route("Get/{dogId}")]
        [HttpGet]
        [ProducesResponseType(typeof(List<PictureInfo>), 200)]
        public IActionResult GetImages(int dogId)
        {
            return Ok(_pictureBusiness.GetImagesForId(dogId));
        }
        [Route("Add")]
        [HttpPost, DisableRequestSizeLimit, Authorize]
        [ProducesResponseType(typeof(List<PictureInfo>), 200)]
        public IActionResult AddImage(int dogId, string dogName)
        {
            var imgFile = Request.Form.Files[0];
            return Ok(_pictureBusiness.AddImage(dogId, dogName, imgFile));
        }
        [Route("Delete")]
        [HttpDelete, Authorize]
        [ProducesResponseType(typeof(List<PictureInfo>), 200)]
        public IActionResult DeleteImage([FromBody] PictureInfo img)
        {
            return Ok(_pictureBusiness.DeleteImage(img));
        }
        [Route("SetProfilePicture")]
        [HttpPut]//,Authorize]
        [ProducesResponseType(typeof(List<PictureInfo>), 200)]
        public IActionResult SetProfilePicture(int dogId, int imgId)
        {
            return Ok(_pictureBusiness.SetProfilePicture(dogId, imgId));
        }
    }
}
