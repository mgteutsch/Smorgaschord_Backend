namespace Smorgaschord_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CustomLessonBeginningAgain : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CustomLessonContainers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CustomLessonTitle = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CustomLessonContainers");
        }
    }
}
