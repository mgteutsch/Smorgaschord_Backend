namespace Smorgaschord_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CustomLessonSongs : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CustomLessonSongContents",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CustomLessonContainerId = c.Int(nullable: false),
                        SongTitle = c.String(),
                        SongArtist = c.String(),
                        SongClip = c.String(),
                        Chord1 = c.String(),
                        Chord2 = c.String(),
                        Chord3 = c.String(),
                        Chord4 = c.String(),
                        Chord1Milisec = c.Int(nullable: false),
                        Chord2Milisec = c.Int(nullable: false),
                        Chord3Milisec = c.Int(nullable: false),
                        Chord4Milisec = c.Int(nullable: false),
                        ContentPlacementOrder = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CustomLessonSongContents");
        }
    }
}
