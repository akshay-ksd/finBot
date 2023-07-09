package com.rtncalculator;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import android.database.Cursor;
import android.net.Uri;
import android.provider.Telephony;
import android.content.ContentResolver;

import java.util.HashMap;
import java.util.Map;

public class CalculatorModule extends ReactContextBaseJavaModule {

    public static final String MODULE_NAME = "CalculatorModule";

    public CalculatorModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void add(int limit, Promise promise) {
        Log.d("CalculatorModule", "SMS messages retrieved successfully");

        ContentResolver contentResolver = getReactApplicationContext().getContentResolver();
        Uri uri = Uri.parse("content://sms/inbox");
        String[] projection = new String[]{"_id", "address", "body", "date"};
        String sortOrder = "date DESC LIMIT " + limit;

        Cursor cursor = contentResolver.query(uri, projection, null, null, sortOrder);

        if (cursor != null && cursor.moveToFirst()) {
            WritableArray smsList = new WritableNativeArray();

            do {
                WritableMap sms = new WritableNativeMap();
                sms.putString("id", cursor.getString(cursor.getColumnIndex("_id")));
                sms.putString("address", cursor.getString(cursor.getColumnIndex("address")));
                sms.putString("body", cursor.getString(cursor.getColumnIndex("body")));
                sms.putString("date", cursor.getString(cursor.getColumnIndex("date")));

                smsList.pushMap(sms);
            } while (cursor.moveToNext());

            cursor.close();

            promise.resolve(smsList);

        } else {
            promise.reject("SMSReadError", "Failed to read SMS messages");
        }
    }
}
