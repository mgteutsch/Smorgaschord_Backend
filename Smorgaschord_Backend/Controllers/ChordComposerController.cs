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

        [Route ("api/chordcomposer")]
        [HttpPut]
        public void EditProgression(int progressionId)
        {
            ChordComposer editChords = _context.ChordComposers.Find(progressionId);
            _context.Entry(editChords).State = EntityState.Modified;
            _context.SaveChanges();
        }

        [Route ("api/chordcomposer")]
        [HttpPost]
        public void DeleteProgression(int progressionId)
        {
            ChordComposer targetedProgression = _context.ChordComposers.Find(progressionId);
            _context.ChordComposers.Remove(targetedProgression);
            _context.SaveChanges();
        }

    }
}
