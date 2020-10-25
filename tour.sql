SET NAMES UTF8;
DROP DATABASE IF EXISTS  tour;
CREATE DATABASE tour CHARSET=UTF8;
USE tour;

CREATE TABLE tour_article(
	uid  INT(10)  NOT NULL,
	utitle VARCHAR(50) NOT NULL,
	subject VARCHAR(50) NOT NULL,
	description VARCHAR(255) NOT NULL,
	image VARCHAR(50) DEFAULT NULL
);

INSERT INTO tour_article(uid,utitle,subject,description,image) VALUES(1,'经典景点','安仁古镇',"安仁古镇地处成都平原西部，距成都41公里、双流国际机场38公里、大邑县城8公里，处于成温邛高速公路和川西旅游环线上","b1.jpg");
INSERT INTO tour_article(uid,utitle,subject,description,image) VALUES(2,'热门景点','芙蓉镇',"芙蓉镇，本名王村，是拥有两千多年历史的古镇，因宏伟瀑布穿梭其中，又称“挂在瀑布上的千年古镇”。","b2.jpg");
INSERT INTO tour_article(uid,utitle,subject,description,image) VALUES(3,'冷门景点','黄姚古镇',"黄姚古镇位于广西贺州昭平县东北部，距离贺州市区40公里，距桂林200公里。","b3.jpg");