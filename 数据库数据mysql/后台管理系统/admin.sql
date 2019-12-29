/*
Navicat MySQL Data Transfer

Source Server         : h51911
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : admin

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-12-29 15:17:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for adminlogin
-- ----------------------------
DROP TABLE IF EXISTS `adminlogin`;
CREATE TABLE `adminlogin` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of adminlogin
-- ----------------------------
INSERT INTO `adminlogin` VALUES ('1', 'zs', '888888');
INSERT INTO `adminlogin` VALUES ('2', 'ls', '123456');
INSERT INTO `adminlogin` VALUES ('3', 'wc', '123456');

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `gid` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `goodname` varchar(255) NOT NULL,
  `price` varchar(50) NOT NULL,
  `num` int(50) NOT NULL,
  `totalprice` varchar(255) NOT NULL,
  `kucun` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', 'å°ç±³1', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('2', 'å°ç±³2', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('3', 'å°ç±³3', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('4', 'å°ç±³4', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('5', 'å°ç±³5', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('6', 'å°ç±³6', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('7', 'å°ç±³7', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('8', 'å°ç±³8', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('9', 'å°ç±³9', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('10', 'å°ç±³10', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('11', 'å°ç±³11', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('12', 'å°ç±³12', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('13', 'å°ç±³13', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('14', 'å°ç±³14', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('15', 'å°ç±³15', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('16', 'å°ç±³16', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('17', 'å°ç±³17', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');
INSERT INTO `goodlist` VALUES ('18', 'å°ç±³18', '100', '1', '100', '1', 'http://www.ss.com/ss.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'å¦ƒfi1', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('2', 'å¦ƒfi2', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('3', 'å¦ƒfi3', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('4', 'å¦ƒfi4', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('5', 'å¦ƒfi5', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('6', 'å¦ƒfi6', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('7', 'å¦ƒfi7', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('9', 'å¦ƒfi9', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('10', 'å¦ƒfi10', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('11', 'å¦ƒfi11', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('12', 'å¦ƒfi12', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('13', 'å¦ƒfi13', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('14', 'å¦ƒfi14', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('15', 'å¦ƒfi15', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('16', 'å¦ƒfi16', '123456', '134@qq.com');
INSERT INTO `user` VALUES ('17', 'å¦ƒfi17', '123456', '134@qq.com');
INSERT INTO `user` VALUES ('18', 'å¦ƒfi18', '123456', '134@qq.com');
INSERT INTO `user` VALUES ('19', 'å¦ƒfi19', '123456', '134@qq.com');
INSERT INTO `user` VALUES ('20', 'å¦ƒfi20', '123456', '123@qq.com');
INSERT INTO `user` VALUES ('21', 'å¦ƒfi21', '123456', '123@qq.com');
SET FOREIGN_KEY_CHECKS=1;
