package com;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class HtmlParsingTester {
    public static void main(String[] args) {
        String namo_html = "<html>\n" +
                "<head>\n" +
                "<title>?젣紐⑹뾾?쓬</title> \n" +
                "<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\"> \n" +
                "<style type=\"text/css\" id=\"NamoSE__GeneralStyle\"> body{font-family :援대┝; color : #000000; font-size : 10pt; word-Wrap : break-word; margin: 7px 7px 0 7px;} p,li{line-height:1.2;  word-wrap: break-word; margin-top:0; margin-bottom:0;} body{overflow:auto;} body{cursor:auto;} html{cursor: default;}.NamoSE_layoutlock_show { word-break: break-all;}\n" +
                "</style>\n" +
                "\n" +
                "</head> \n" +
                "<body data-new-gr-c-s-check-loaded=\"14.1043.0\" data-gr-ext-installed=\"\" data-new-gr-c-s-loaded=\"14.1043.0\">\n" +
                "<p><img src=\"/nhvan/rest/ce/image/kAdLjihaZB1697780400710#png\" title=\"null\" alt=\"\" style=\"vertical-align: baseline; border: 0px solid rgb(0, 0, 0);\"></p><grammarly-desktop-integration data-grammarly-shadow-root=\"true\"></grammarly-desktop-integration>\n" +
                "</body>\n" +
                "</html>";

        Document doc = Jsoup.parse(namo_html);
        Element body = doc.body();
        System.out.println(body);
        System.out.println();

        Element paragraph = body.getElementsByTag("p").get(0);
        System.out.println(paragraph);
        System.out.println();

        Element image = paragraph.getElementsByTag("img").get(0);
        System.out.println(image);
        System.out.println();

        image.attr("src", "drug/heaven/fentanyl");
        System.out.println(image);
        System.out.println();

    }
}
