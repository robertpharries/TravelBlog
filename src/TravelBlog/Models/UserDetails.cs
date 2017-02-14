using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TravelBlog.Models
{
    public class UserDetails
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Display(Name = "name")]
        public string name { get; set; }

        [Required]
        [Display(Name = "email")]
        public string email { get; set; }
    }
}
