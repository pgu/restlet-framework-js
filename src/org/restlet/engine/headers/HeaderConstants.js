var HeaderConstants = new [class Class]({});

HeaderConstants.extend({
	EXPECT_CONTINUE: "100-continue",
    // --- Cache directives ---
	CACHE_NO_CACHE: "no-cache",
	CACHE_NO_STORE: "no-store",
	CACHE_MAX_AGE: "max-age",
	CACHE_MAX_STALE: "max-stale",
	CACHE_MIN_FRESH: "min-fresh",
	CACHE_NO_TRANSFORM: "no-transform",
	CACHE_ONLY_IF_CACHED: "only-if-cached",
	CACHE_PUBLIC: "public",
	CACHE_PRIVATE: "private",
	CACHE_MUST_REVALIDATE: "must-revalidate",
	CACHE_PROXY_MUST_REVALIDATE: "proxy-revalidate",
	CACHE_SHARED_MAX_AGE: "s-maxage",
	// --- Header names ---
	HEADER_ACCEPT: "Accept",
	HEADER_ACCEPT_CHARSET: "Accept-Charset",
	HEADER_ACCEPT_ENCODING: "Accept-Encoding",
	HEADER_ACCEPT_LANGUAGE: "Accept-Language",
	HEADER_ACCEPT_RANGES: "Accept-Ranges",
	HEADER_AGE: "Age",
	HEADER_ALLOW: "Allow",
	HEADER_AUTHENTICATION_INFO: "Authentication-Info",
	HEADER_AUTHORIZATION: "Authorization",
	HEADER_CACHE_CONTROL: "Cache-Control",
	HEADER_CONNECTION: "Connection",
	HEADER_CONTENT_DISPOSITION: "Content-Disposition",
	HEADER_CONTENT_ENCODING: "Content-Encoding",
	HEADER_CONTENT_LANGUAGE: "Content-Language",
	HEADER_CONTENT_LENGTH: "Content-Length",
	HEADER_CONTENT_LOCATION: "Content-Location",
	HEADER_CONTENT_MD5: "Content-MD5",
	HEADER_CONTENT_RANGE: "Content-Range",
	HEADER_CONTENT_TYPE: "Content-Type",
	HEADER_COOKIE: "Cookie",
	HEADER_DATE: "Date",
	HEADER_ETAG: "ETag",
	HEADER_EXPECT: "Expect",
	HEADER_EXPIRES: "Expires",
	HEADER_FROM: "From",
	HEADER_HOST: "Host",
	HEADER_IF_MATCH: "If-Match",
	HEADER_IF_MODIFIED_SINCE: "If-Modified-Since",
	HEADER_IF_NONE_MATCH: "If-None-Match",
	HEADER_IF_RANGE: "If-Range",
	HEADER_IF_UNMODIFIED_SINCE: "If-Unmodified-Since",
	HEADER_LAST_MODIFIED: "Last-Modified",
	HEADER_LOCATION: "Location",
	HEADER_MAX_FORWARDS: "Max-Forwards",
	HEADER_PRAGMA: "Pragma",
	HEADER_PROXY_AUTHENTICATE: "Proxy-Authenticate",
	HEADER_PROXY_AUTHORIZATION: "Proxy-Authorization",
	HEADER_RANGE: "Range",
	HEADER_REFERRER: "Referer",
	HEADER_RETRY_AFTER: "Retry-After",
	HEADER_SERVER: "Server",
	HEADER_SET_COOKIE: "Set-Cookie",
	HEADER_SET_COOKIE2: "Set-Cookie2",
	HEADER_SLUG: "Slug",
	HEADER_TRAILER: "Trailer",
	HEADER_TRANSFER_ENCODING: "Transfer-Encoding",
	HEADER_TRANSFER_EXTENSION: "TE",
	HEADER_UPGRADE: "Upgrade",
	HEADER_USER_AGENT: "User-Agent",
	HEADER_VARY: "Vary",
	HEADER_VIA: "Via",
	HEADER_WARNING: "Warning",
	HEADER_WWW_AUTHENTICATE: "WWW-Authenticate",
	HEADER_X_FORWARDED_FOR: "X-Forwarded-For",
	HEADER_X_HTTP_METHOD_OVERRIDE: "X-HTTP-Method-Override",
    // --- Attribute names ---
	ATTRIBUTE_HEADERS: "org.restlet.http.headers",
	ATTRIBUTE_VERSION: "org.restlet.http.version",
	ATTRIBUTE_HTTPS_CLIENT_CERTIFICATES: "org.restlet.https.clientCertificates",
	ATTRIBUTE_HTTPS_CIPHER_SUITE: "org.restlet.https.cipherSuite",
	ATTRIBUTE_HTTPS_KEY_SIZE: "org.restlet.https.keySize",
	ATTRIBUTE_HTTPS_SSL_SESSION_ID: "org.restlet.https.sslSessionId"
});