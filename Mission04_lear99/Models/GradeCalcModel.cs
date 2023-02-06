using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission04_lear99.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int groupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
        [Required]
        [Range(0, 100)]
        public int midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public int final { get; set; }
        [Required]
        [Range(0, 100)]
        public int extraCredit { get; set; }
    }
}
