namespace Smorgaschord_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixingParentChildLesson : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.CustomLessonSongContents", "TextSection", c => c.String());
            CreateIndex("dbo.CustomLessonSongContents", "CustomLessonContainerId");
            AddForeignKey("dbo.CustomLessonSongContents", "CustomLessonContainerId", "dbo.CustomLessonContainers", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CustomLessonSongContents", "CustomLessonContainerId", "dbo.CustomLessonContainers");
            DropIndex("dbo.CustomLessonSongContents", new[] { "CustomLessonContainerId" });
            DropColumn("dbo.CustomLessonSongContents", "TextSection");
        }
    }
}
