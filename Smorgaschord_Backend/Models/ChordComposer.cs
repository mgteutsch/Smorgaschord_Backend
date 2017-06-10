using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Smorgaschord_Backend.Models
{
    public class ChordComposer
    {
        [Key]
        public int ChordComposerId { get; set; }
        public string ChordProgressionName { get; set; }
        public string Chord1 { get; set; }
        public string Chord2 { get; set; }
        public string Chord3 { get; set; }
        public string Chord4 { get; set; } 
    }
}