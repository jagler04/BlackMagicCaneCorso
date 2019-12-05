using BlackMagicCaneCorso.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageController : ControllerBase
    {
        private readonly ImageService _imageService;

        public ImageController(ImageService imageService)
        {
            _imageService = imageService;
        }
        [HttpPost("{DogId}/{isProfile}")]
        public IActionResult AddImage(int DogId, bool isProfile, [FromBody] IFormFile file)
        {
            if (file.Length > 0)
            {
                _imageService.AddImage(DogId, isProfile, file);
                return Ok();
            }
            return BadRequest();
        }
    }
}
