using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BlackMagicCaneCorso.Data;
using BlackMagicCaneCorso.Models;
using BlackMagicCaneCorso.Utilities;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace BlackMagicCaneCorso.Business
{
    public class Authorization
    {
        private readonly AuthorizationRepository _authorizationRepository;
        public Authorization(AuthorizationRepository authorizationRepository)
        {
            _authorizationRepository = authorizationRepository;
        }
        public AuthModel ValudateLogin(LoginModel user)
        {
            if (user == null)
            {
                throw new Exception("Invalid");
            }
            var account = _authorizationRepository.GetAccount(user.Email);
            if (account != null)
            {
                //var test = Security.Decrypt(account.Password);
                if (user.Password == Security.Decrypt(account.Password))
                {
                    //var appSettingsSection = Application. Configuration.GetSection("AppSettings");

                    //var appSettings = appSettingsSection.Get<AppSettings>();
                    //var key = Encoding.ASCII.GetBytes(appSettings.Secret);

                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("blackMagicC8neC0rsoSecretKey!"));
                    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var tokeOptions = new JwtSecurityToken(
                        issuer: "http://localhost",
                        audience: "http://localhost",
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddDays(1),
                        signingCredentials: signinCredentials
                    );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                    return new AuthModel { Token = tokenString };
                }
            }
            //If no account or password is incorrect, we will return nothing
            return null;
        }
    }
}
