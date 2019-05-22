/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}
/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}
/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}
/**
 * Cookies
 */
export const setCookie = (c_name, value, expiredays) => {
	const exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + value + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

export const getCookie = (name) => {
	const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
	const arr = document.cookie.match(reg)
	if (arr)
		return (arr[2]);
	else
		return null;
}

export const delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
