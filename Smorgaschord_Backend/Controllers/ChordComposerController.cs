using Smorgaschord_Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Smorgaschord_Backend.Controllers
{
    [Authorize]
    public class ChordComposerController : ApiController
    {
        private ApplicationDbContext _context;

        public ChordComposerController()
        {
            _context = new ApplicationDbContext();
        }

        [Route ("api/chordcomposer")]
        [HttpGet]
        public List<ChordComposer> GetAllProgressions()
        {
            return _context.ChordComposers.ToList();
        }

        [Route ("api/chordcomposer")]
        [HttpPost]
        public void AddProgression(ChordComposer newUserProgression)
        {
            _context.ChordComposers.Add(newUserProgression);
            _context.SaveChanges();
        }

        [Route ("api/chordcomposer/editChords")]
        [HttpPut]
        public void EditProgression(ChordComposer editedProgression)
        {
            ChordComposer editChords = _context.ChordComposers.Find(editedProgression.Id);
            editChords.ChordProgressionName = editedProgression.ChordProgressionName;
            editChords.Chord1 = editedProgression.Chord1;
            editChords.Chord2 = editedProgression.Chord2;
            editChords.Chord3 = editedProgression.Chord3;
            editChords.Chord4 = editedProgression.Chord4;
            _context.Entry(editChords).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [Route ("api/chordcomposer/{progressionId}")]
        [HttpDelete]
        public void DeleteProgression(int progressionId)
        {
            ChordComposer targetedProgression = _context.ChordComposers.Find(progressionId);
            _context.ChordComposers.Remove(targetedProgression);
            _context.SaveChanges();
        }

    }
}
