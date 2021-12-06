using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; } //entity framework needs exactly case sensitive "Id"
        public string UserName { get; set; } //another convention for entity asp.net core identity case sensitive "UserName"
    }
}