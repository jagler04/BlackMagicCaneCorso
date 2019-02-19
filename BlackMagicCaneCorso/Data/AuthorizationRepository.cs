using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public class AuthorizationRepository
    {
        private readonly DogContext _context;
        public AuthorizationRepository(DogContext context)
        {
            _context = context;
        }
        internal AccountInfo GetAccount(string email)
        {
            return _context.Accounts.FirstOrDefault(a => a.Email == email);
        }
    }
}
