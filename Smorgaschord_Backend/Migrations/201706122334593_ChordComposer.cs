namespace Smorgaschord_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChordComposer : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChordComposers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ChordProgressionName = c.String(),
                        Chord1 = c.String(),
                        Chord2 = c.String(),
                        Chord3 = c.String(),
                        Chord4 = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ChordComposers");
        }
    }
}
