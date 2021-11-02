
package com.xyzpharmacy;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // add this
import android.os.Bundle; // add this

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override                                             // add this
  protected void onCreate(Bundle savedInstanceState) {  // add this
    SplashScreen.show(this);                            // add this
    super.onCreate(null);                 // add this
  } 
  @Override
  protected String getMainComponentName() {
    return "xyzPharmacy";
  }
  //  @Override
  //       protected void onCreate(Bundle savedInstanceState) {
  //         super.onCreate(null);
  // }
}
