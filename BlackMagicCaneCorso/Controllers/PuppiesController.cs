using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackMagicCaneCorso.Business;
using BlackMagicCaneCorso.Models;
using Microsoft.AspNetCore.Mvc;

namespace BlackMagicCaneCorso.Controllers
{
    [Route("Puppies")]
    public class PuppiesController : Controller
    {
        private readonly Puppies _puppies;
        public PuppiesController(Puppies puppies)
        {
            _puppies = puppies;
        }
        [Route("Request")]
        [HttpPost]
        public IActionResult RequestAPuppy([FromBody] RegistrationForm frm)
        {
            _puppies.Register(frm);
            return Ok();
        }
    }
}
