package com.example.myapplication

import android.app.Activity
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.view.KeyEvent
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.common.LifecycleState
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader


class MainActivity : AppCompatActivity() {
    companion object {
        const val OVERLAY_PERMISSION_REQ_CODE = 1  // Choose any value
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val btn = findViewById<Button>(R.id.button1)

        btn.setOnClickListener {
            val intent = Intent(this, MyReactActivity::class.java)
            startActivity(intent)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        lateinit var reactInstanceManager: ReactInstanceManager
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    Toast.makeText(this, "You cannot open the React Native app as you have denied the permission", Toast.LENGTH_SHORT).show();
                }
            }
        }
        reactInstanceManager?.onActivityResult(this, requestCode, resultCode, data)
    }
}





class MyReactActivity : Activity(), DefaultHardwareBackBtnHandler {
    private lateinit var reactRootView: ReactRootView
    private lateinit var reactInstanceManager: ReactInstanceManager
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        SoLoader.init(this, false)
        reactRootView = ReactRootView(this)
//        val packages: List<ReactPackage> = PackageList().packages
        // Packages that cannot be autolinked yet can be added manually here, for example:
        // packages.add(MyReactNativePackage())
        // Remember to include them in `settings.gradle` and `app/build.gradle` too.
//        reactInstanceManager = ReactInstanceManager.builder()
//            .setApplication(application)
//            .setCurrentActivity(this)
//            .setBundleAssetName("index.android.bundle")
//            .setJSMainModulePath("index")
//            .addPackages(MainReactPackage())
//            .setUseDeveloperSupport(BuildConfig.DEBUG)
//            .setInitialLifecycleState(LifecycleState.RESUMED)
//            .build()
        reactInstanceManager = ReactInstanceManager.builder()
            .setApplication(application)
            .setCurrentActivity(this)
            .setBundleAssetName("index.android.bundle")
            .setJSMainModulePath("index")
            .addPackage(MainReactPackage())
            .setUseDeveloperSupport(BuildConfig.DEBUG)
            .setInitialLifecycleState(LifecycleState.RESUMED)
            .build()
        // The string here (e.g. "MyReactNativeApp") has to match
        // the string in AppRegistry.registerComponent() in index.js
        print("Here")
        reactRootView?.startReactApplication(reactInstanceManager, "MyReactNativeApp", null)
        setContentView(reactRootView)
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }
    override fun onPause() {
        super.onPause()
        reactInstanceManager.onHostPause(this)
    }

    override fun onResume() {
        super.onResume()
        reactInstanceManager.onHostResume(this, this)
    }

    override fun onDestroy() {
        super.onDestroy()
        reactInstanceManager.onHostDestroy(this)
        reactRootView.unmountReactApplication()
    }
    override fun onBackPressed() {
        reactInstanceManager.onBackPressed()
        super.onBackPressed()
    }
    override fun onKeyUp(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_MENU && reactInstanceManager != null) {
            reactInstanceManager.showDevOptionsDialog()
            return true
        }
        return super.onKeyUp(keyCode, event)
    }
}