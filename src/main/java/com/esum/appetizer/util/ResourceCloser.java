package com.esum.appetizer.util;

import java.io.Closeable;
import java.net.Socket;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class ResourceCloser {
	
	public static void close(Closeable r) {
		if (r == null) {
			return;
		}
		try {
			r.close();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

	public static void close(Connection r) {
		if (r == null) {
			return;
		}
		try {
			r.close();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}
	
	public static void close(Statement r) {
		if (r == null) {
			return;
		}
		try {
			r.close();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

	public static void close(ResultSet r) {
		if (r == null) {
			return;
		}
		try {
			r.close();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

	public static void close(javax.naming.Context r) {
		if (r == null) {
			return;
		}
		try {
			r.close();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}


	public static void close(Socket r) {
		if (r == null) {
			return;
		}
		try {
			r.close();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}
}
