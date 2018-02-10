package jianqiang.com.youngheart.activity.movie;

import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import jianqiang.com.youngheart.R;
import jianqiang.com.youngheart.base.AppBaseActivity;

public class MovieByJsonObjectActivity extends AppBaseActivity {
	TextView tvMovieName;
	TextView tvMovieId;

	@Override
	protected void initVariables() {
	}

	@Override
	protected void initViews(Bundle savedInstanceState) {
		setContentView(R.layout.activity_movie);

		tvMovieName = (TextView) findViewById(R.id.tvMovieName);
		tvMovieId = (TextView) findViewById(R.id.tvMovieId);
	}

	@Override
	protected void loadData() {
		String url = "http://10.0.2.2:8888/movie/getmoviedetail?cityId=1";
		new WeatherAsyncTask().execute(url);
	}

	public class WeatherAsyncTask extends AsyncTask<String, Void, String> {

		@Override
		protected void onPreExecute() {
		}

		@Override
		protected String doInBackground(String... url) {
			return getResponseFromURL(url[0]);
		}

		@Override
		protected void onPostExecute(String strResponse) {
			// 第一种写法，基于JSONObject
			try {
				JSONObject jsonResponse = new JSONObject(strResponse);
				JSONObject result = jsonResponse
						.getJSONObject("result");
				String movieName = result.getString("movieName");
				int movieId = result.getInt("movieId");

				tvMovieName.setText(movieName);
				tvMovieId.setText(String.valueOf(movieId));
			} catch (JSONException e) {
				e.printStackTrace();
			}
		}

		/*
		 * 根据URL通过Http请求远程调用Google Directions API 并将所要的数据封装到JSONObject中
		 */
		private String getResponseFromURL(String strUrl) {

			String strResponse = null;

			try {
				// 新建一个URL对象
				URL url = new URL(strUrl);
				// 打开一个HttpURLConnection连接
				HttpURLConnection urlConn = (HttpURLConnection) url.openConnection();
				// 设置为Post请求
				urlConn.setRequestMethod("GET");
				//urlConn设置请求头信息
				//设置请求中的媒体类型信息。
				urlConn.setRequestProperty("Content-Type", "text/json");
				//设置客户端与服务连接类型
				urlConn.addRequestProperty("Connection", "Keep-Alive");
				// 开始连接
				urlConn.connect();
				// 判断请求是否成功
				if (urlConn.getResponseCode() == 200) {
					// 获取返回的数据
					strResponse = streamToString(urlConn.getInputStream());
				} else {

				}
				// 关闭连接
				urlConn.disconnect();
			} catch (Exception e) {

			}

			return strResponse;
		}
	}

	/**
	 * 将输入流转换成字符串
	 *
	 * @param is 从网络获取的输入流
	 * @return
	 */
	public String streamToString(InputStream is) {
		try {
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			byte[] buffer = new byte[1024];
			int len = 0;
			while ((len = is.read(buffer)) != -1) {
				baos.write(buffer, 0, len);
			}
			baos.close();
			is.close();
			byte[] byteArray = baos.toByteArray();
			return new String(byteArray);
		} catch (Exception e) {
			Log.e("Network", e.toString());
			return null;
		}
	}
}
