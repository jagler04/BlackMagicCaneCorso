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
        [HttpPost, DisableRequestSizeLimit]//, Authorize]
        [ProducesResponseType(typeof(List<PictureInfo>), 200)]
        public IActionResult AddImage(int dogId, string dogName)//, IFormFile imgFile)
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
    }
}
