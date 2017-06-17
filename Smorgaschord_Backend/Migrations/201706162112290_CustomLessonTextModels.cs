namespace Smorgaschord_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CustomLessonTextModels : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CustomLessonTextContents",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CustomLessonContainerId = c.Int(nullable: false),
                        TextSection = c.String(),
                        ContentPlacementOrder = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CustomLessonTextContents");
        }
    }
}
