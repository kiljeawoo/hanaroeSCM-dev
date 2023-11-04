package com.esum.appetizer.util;

public class SysConstants {
    /** OS */
    public static final String OS = System.getProperty("os.name");
    
    /** Line Seperator */
    public static final String LINE_SEPARATOR = System.getProperty("line.separator"); 
    
    /** File Seperator */
    public static final String FILE_SEPARATOR = System.getProperty("file.separator");
    
    public static String DEFAULT_ENCODING = "UTF-8";
    
    /**
     * CR.
     */
    public static final byte CR = (byte) '\r';


    /**
     * LF.
     */
    public static final byte LF = (byte) '\n';


    /**
     * SP.
     */
    public static final byte SP = (byte) ' ';


    /**
     * HT.
     */
    public static final byte HT = (byte) '\t';


    /**
     * COLON.
     */
    public static final byte COLON = (byte) ':';
}
