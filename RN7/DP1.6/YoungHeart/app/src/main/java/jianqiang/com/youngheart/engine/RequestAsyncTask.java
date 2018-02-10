package jianqiang.com.youngheart.engine;

import android.os.AsyncTask;
import android.util.Log;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public abstract class RequestAsyncTask extends AsyncTask<String, Void, Response> {
	public abstract void onSuccess(String content);

	public abstract void onFail(String errorMessage);

	@Override
	protected void onPreExecute() {
	}

	@Override
	protected Response doInBackground(String... url) {
		return getResponseFromURL(url[0]);
	}

	@Override
	protected void onPostExecute(Response response) {
		if(response.hasError()) {
			onFail(response.getErrorMessage());
		} else {
			onSuccess(response.getResult());
		}
	}

	private Response getResponseFromURL(String strUrl) {
		Response response = new Response();

		try {
			// 新建一个URL对象
			URL url = new URL(strUrl);
			// 打开一个HttpURLConnection连接
			HttpURLConnection urlConn = (HttpURLConnection) url.openConnection();
			// 设置连接主机超时时间
			urlConn.setConnectTimeout(5 * 1000);
			//设置从主机读取数据超时
			urlConn.setReadTimeout(5 * 1000);
			// 设置是否使用缓存  默认是true
			urlConn.setUseCaches(true);
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
				String result = streamToString(urlConn.getInputStream());
				response.setError(false);
				response.setResult(result);
			} else {
				response.setError(true);
				response.setErrorMessage("Get方式请求失败");
			}
			// 关闭连接
			urlConn.disconnect();
		} catch (Exception e) {
			response.setError(true);
			response.setErrorMessage(e.getMessage());
		}

		return response;
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
