using BlackMagicCaneCorso.Models;
using BlackMagicCaneCorso.Business;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Controllers
{
    [Route("Auth")]
    public class AuthController : Controller
    {
        private readonly Authorization _authorization;
        public AuthController(Authorization authorication)
        {
            _authorization = authorication;
        }
        [HttpPost, Route("login")]
        [ProducesResponseType(typeof(AuthModel), 200)]
        public IActionResult Login([FromBody]LoginModel user)
        {
            try
            {
                var result = _authorization.ValudateLogin(user);
                if (result != null)
                    return Ok(result);
                else
                    return Unauthorized();
                    
            }
            catch
            {
                return BadRequest("Invalid client request");
            }
            
        }
    }
}
