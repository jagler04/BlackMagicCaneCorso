using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Models
{
    public class AccountInfo
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int AccountTypeID {get; set; }

        public AccountType AccountType { get; set; }
    }
}
