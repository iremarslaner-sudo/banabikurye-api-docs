const METHOD_CLASS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  AUTH: "neutral",
  INFO: "neutral",
  FLOW: "flow"
};

const LANGUAGE_LABELS = {
  curl: "cURL",
  javascript: "JavaScript"
};

const PRISM_LANGUAGES = {
  curl: "bash",
  javascript: "javascript"
};

const I18N = {
  tr: {
    htmlLang: "tr",
    apiTitle: "Banabikurye Business API",
    apiDescription:
      "Banabikurye Business API ile otomatik teslimat siparişleri oluşturabilir, siparişlerinizi yönetebilir, kurye bilgilerini alabilir ve sipariş/teslimat değişikliklerine abone olabilirsiniz.",
    searchLabel: "API ara",
    searchPlaceholder: "Endpoint, kategori, parametre...",
    test: "Test",
    production: "Prod",
    auth: "Auth",
    officialDocs: "Resmi doküman",
    parameters: "Parametreler",
    parameter: "Parametre",
    type: "Tip",
    required: "Zorunlu",
    description: "Açıklama",
    yes: "Evet",
    no: "Hayır",
    noParameters: "Bu endpoint için parametre tanımı bulunmuyor.",
    responses: "Yanıtlar",
    responseSchema: "YANIT ŞEMASI:",
    noResponseSchema: "Response schema tanımlı değil.",
    noSchemaFields: "Schema alanı tanımlı değil.",
    requestSamples: "İstek örnekleri",
    payload: "Gövde",
    contentType: "İçerik tipi",
    copy: "Kopyala",
    copied: "Kopyalandı",
    expandAll: "Tümünü aç",
    collapseAll: "Tümünü kapat",
    tryIt: "Dene",
    tryNotAvailable: "Bu bölüm bilgilendirme, callback veya akış açıklaması olduğu için canlı istek desteklenmiyor.",
    testOnlyNotice: "Canlı istekler güvenlik nedeniyle yalnızca test ortamına gönderilir. Production istekleri dokümantasyon arayüzünden gönderilemez.",
    environment: "Ortam",
    token: "Token",
    queryJson: "Query JSON",
    bodyJson: "Body JSON",
    sendRequest: "İstek Gönder",
    noRequestYet: "Henüz istek gönderilmedi.",
    tokenRequired: "Token alanı zorunlu.",
    sending: "İstek gönderiliyor...",
    requestFailed: "İstek gönderilemedi.",
    corsNote: "Not: Tarayıcı CORS politikası, ağ erişimi veya geçersiz token canlı isteği engelleyebilir.",
    dataLoadError: "Veri yüklenemedi",
    dataLoadHint:
      "JSON dosyasını tarayıcıda dinamik okuyabilmek için sayfayı yerel bir sunucu üzerinden açın. Örneğin bu çalışma klasöründe çalışan önizleme adresini kullanabilirsiniz.",
    categoryNames: {
      Overview: "Genel Bakış",
      "API methods": "API Metotları",
      "Orders & Deliveries": "Siparişler ve Teslimatlar",
      Notifications: "Bildirimler",
      "Use cases": "Kullanım Senaryoları",
      Errors: "Hatalar",
      Changelog: "Değişiklikler"
    },
    endpointDescriptions: {
      overview:
        "Banabikurye Business API entegrasyonu test ortamında robotapitest.banabikurye.com ile doğrulanır. Test başarılı olduktan sonra production erişimi için api.tr@borzodelivery.com adresiyle iletişime geçilir.",
      requests:
        "Tüm istekler HTTPS üzerinden yapılır. Business API dokümanına göre yalnızca GET ve POST metotları desteklenir. POST istekleri JSON body, GET istekleri query string kullanır.",
      responses:
        "Yanıtlar JSON ve UTF-8 formatındadır. Başarılı yanıtlarda HTTP 200 ve is_successful: true döner. Hatalı isteklerde HTTP 400, is_successful: false, errors ve gerektiğinde parameter_errors alanları döner.",
      "parameter-data-types":
        "Business API boolean, integer, string, date, timestamp, float, list, object, money, phone, coordinate ve null veri tiplerini kullanır.",
      "calculate-order":
        "Sipariş oluşturmadan önce fiyat hesaplamak ve parametreleri doğrulamak için kullanılır. Eksik sipariş hesaplanabilir fakat sonuç imprecise olabilir; kritik problemler warnings alanında döner.",
      "create-order":
        "Yeni teslimat siparişi oluşturur. En az 2 point gerekir; ilk nokta pickup point, sonraki noktalar teslimat noktalarıdır.",
      "edit-order":
        "new, available, active veya delayed statülerindeki siparişleri düzenlemek için kullanılır. Gönderilmeyen alanlar değişmez; null gönderilen alan kaldırılır.",
      "cancel-order":
        "new, available, active veya delayed statülerindeki siparişi iptal eder. Kurye herhangi bir adrese uğradıysa sipariş iptal edilemez.",
      orders:
        "Sipariş listesini order_id değerine göre azalan sırayla döndürür. order_id, status, offset ve count ile filtrelenebilir.",
      courier:
        "Siparişe atanmış kurye bilgisini döndürür. Sipariş active ise ve kurye yoldaysa latitude ve longitude alanları da dönebilir.",
      client: "Müşteri profil bilgisini ve izin verilen ödeme yöntemlerini döndürür.",
      "bank-cards": "Sipariş oluştururken kullanılabilecek kayıtlı banka kartlarını döndürür.",
      labels: "ZPL veya PDF formatında kutu etiketlerini döndürür."
    }
  },
  en: {
    htmlLang: "en",
    apiTitle: "Banabikurye Business API",
    apiDescription:
      "Use Banabikurye Business API to create delivery orders automatically, manage orders, retrieve courier information, and subscribe to order or delivery updates.",
    searchLabel: "Search API",
    searchPlaceholder: "Endpoint, category, parameter...",
    test: "Test",
    production: "Prod",
    auth: "Auth",
    officialDocs: "Official docs",
    parameters: "Parameters",
    parameter: "Parameter",
    type: "Type",
    required: "Required",
    description: "Description",
    yes: "Yes",
    no: "No",
    noParameters: "No parameters are defined for this endpoint.",
    responses: "Responses",
    responseSchema: "RESPONSE SCHEMA:",
    noResponseSchema: "Response schema is not defined.",
    noSchemaFields: "No schema fields are defined.",
    requestSamples: "Request samples",
    payload: "Payload",
    contentType: "Content type",
    copy: "Copy",
    copied: "Copied",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    tryIt: "Try it out",
    tryNotAvailable: "Live requests are not available for informational, callback, or flow sections.",
    testOnlyNotice: "Live requests are sent only to the test environment for safety. Production requests cannot be sent from the documentation UI.",
    environment: "Environment",
    token: "Token",
    queryJson: "Query JSON",
    bodyJson: "Body JSON",
    sendRequest: "Send Request",
    noRequestYet: "No request has been sent yet.",
    tokenRequired: "Token is required.",
    sending: "Sending request...",
    requestFailed: "Request could not be sent.",
    corsNote: "Note: Browser CORS policy, network access, or an invalid token may block live requests.",
    dataLoadError: "Data could not be loaded",
    dataLoadHint:
      "Open the page through a local server so the browser can read the JSON file dynamically. You can use the preview URL for this workspace.",
    categoryNames: {},
    endpointDescriptions: {
      overview:
        "Validate the Banabikurye Business API integration in the test environment at robotapitest.banabikurye.com. After successful testing, contact api.tr@borzodelivery.com for production access.",
      requests:
        "All requests must be sent over HTTPS. Business API supports GET and POST methods. POST requests send JSON bodies; GET requests send parameters in the query string.",
      responses:
        "Responses are returned as JSON with UTF-8 encoding. Successful responses use HTTP 200 and is_successful: true. Bad requests use HTTP 400 with errors and, when relevant, parameter_errors.",
      "parameter-data-types":
        "Business API uses boolean, integer, string, date, timestamp, float, list, object, money, phone, coordinate, and null data types.",
      "calculate-order":
        "Calculates the delivery price and validates parameters before placing an order. Incomplete orders can be calculated, but warnings may be returned.",
      "create-order":
        "Creates a new delivery order. At least 2 points are required: the first point is pickup and the following points are delivery points.",
      "edit-order":
        "Edits orders in new, available, active, or delayed statuses. Omitted fields stay unchanged; fields sent as null are removed.",
      "cancel-order":
        "Cancels an order in new, available, active, or delayed status. The order cannot be canceled if a courier has already visited any address.",
      orders:
        "Returns the list of orders sorted by order_id descending. You can filter by order_id, status, offset, and count.",
      courier:
        "Returns courier information for an order. If the order is active and the courier is on the way, latitude and longitude may also be returned.",
      client: "Returns client profile information and allowed payment methods.",
      "bank-cards": "Returns saved bank cards that can be used when creating orders.",
      labels: "Returns package labels in ZPL or PDF format.",
      "status-model":
        "An order is the top-level entity that contains all delivery points. A delivery is a more detailed entity for a single order point.",
      "order-types":
        "For standard orders, the courier visits addresses within the selected time windows. End-of-day orders are delivered during the day and accept exactly 2 points.",
      "payment-methods":
        "Supported payment methods are cash, balance, and bank_card. bank_card requires bank_card_id.",
      "order-callback":
        "When a Callback URL is configured in the personal cabinet, order_created and order_changed events are sent to that URL as JSON. Verify requests with the X-DV-Signature HMAC SHA256 signature.",
      "delivery-callback":
        "When delivery callbacks are enabled, delivery_created and delivery_changed events are sent with a separate delivery model. Failed callback deliveries are retried for up to 24 hours.",
      "how-to-place-order":
        "The standard order flow has two steps: first calculate cost and validation with /calculate-order, then complete the same data and create the order with /create-order.",
      "track-order-delivery":
        "Orders and deliveries can be tracked in two ways: automatic callback notifications or manual polling with /orders and /courier.",
      "goods-buyout":
        "If the courier pays for goods at pickup and collects payment from the customer at delivery, send buyout_amount on the pickup point and taking_amount on the delivery point.",
      "request-error-codes":
        "Business API may return request error codes. Common examples include required_auth_token, invalid_auth_token, required_method_get, required_method_post, invalid_post_json, invalid_parameters, and invalid_api_method.",
      "parameter-error-codes":
        "Parameter-level error codes include required, unknown, invalid_list, invalid_object, invalid_boolean, invalid_date, invalid_integer, invalid_string, invalid_phone, invalid_region, address_not_found, min_length, and max_length.",
      "changelog-1-8":
        "Business API 1.8 added a new order type named vip_delivery. For vip_delivery orders, type must be set to vip_delivery and point-level required_start_datetime / required_finish_datetime fields must not be sent."
    }
  }
};

const PARAMETER_DESCRIPTIONS_EN = {
  "1. calculate-order": "Show the delivery price from payment_amount; warnings can be shown to the user or operations team.",
  "2. create-order": "Send all required parameters. At this stage errors are critical and the order will not be created.",
  Automatic: "Set a Callback URL in the personal cabinet and listen for order or delivery callbacks.",
  "Content-Type": "For POST requests, send application/json; charset=utf-8 when needed.",
  Manual: "Poll statuses with /orders and courier details or location with /courier.",
  "X-DV-Auth-Token": "Secret auth token from the personal cabinet.",
  "X-DV-Signature": "HMAC SHA256 signature calculated with the Callback Secret Key.",
  address_not_found: "Address geocoding failed.",
  backpayment_details: "Can be sent as null to remove it from the order.",
  balance: "Payment from account balance.",
  bank_card: "Payment with a saved bank card.",
  bank_card_id: "Bank card ID required for the bank_card payment method.",
  cash: "Cash payment.",
  checkin_code: "Arrival PIN code used in the point and delivery model.",
  count: "Maximum number of records to return. Cannot exceed 50; default is 10.",
  delivery: "Contains delivery ID, status, address, courier, and package information.",
  "delivery.status":
    "Delivery statuses such as planned, active, finished, canceled, courier_assigned, parcel_picked_up, and return_finished.",
  delivery_id: "Delivery ID or list of delivery IDs to retrieve labels for.",
  endofday: "End-of-day delivery; vehicle type and point time intervals are set automatically.",
  errors: "List of request error codes.",
  event_datetime: "Event date and time.",
  event_type: "Event type, such as order_created, order_changed, delivery_created, or delivery_changed.",
  invalid_api_method: "Unknown API method was requested.",
  invalid_auth_token: "The auth token is invalid.",
  invalid_parameters: "The request contains parameter errors; read parameter_errors for details.",
  invalid_phone: "Invalid phone number.",
  is_successful: "Whether the request was successful.",
  matter: "Delivery contents. Maximum length is 5,000 characters.",
  money: "Money values are sent as strings to avoid rounding errors. Example: \"190.00\".",
  offset: "Number of orders to skip for pagination. Default is 0.",
  order: "Current order model.",
  "order.status": "Order statuses: new, available, active, completed, reactivated, draft, canceled, or delayed.",
  order_id: "Full order ID.",
  parameter_errors: "Parameter-level error details returned with invalid_parameters.",
  payment_amount: "One of the fee fields that became nullable in API 1.8.",
  payment_method: "Payment method: cash, balance, or bank_card.",
  phone: "Phone number as a string. Example: \"908880000001\".",
  point_id: "Point ID or list of point IDs to retrieve labels for.",
  points:
    "List of addresses for the courier to visit. Standard orders support up to 99 points; end-of-day orders require exactly 2 points.",
  "points[0].buyout_amount": "Amount the courier pays at the pickup point.",
  "points[1].taking_amount": "Amount the courier collects from the customer.",
  "points[].address": "Street address geocoded with Google Maps API. Maximum length is 350 characters.",
  "points[].contact_person.phone": "Phone number of the contact person at the point.",
  "points[].packages[].order_package_id": "Must be sent when editing an existing package.",
  "points[].point_id": "Must be sent when editing an existing point; omitted points are deleted.",
  productionUrl: "Use https://robot.banabikurye.com/api/business/1.8 for production requests.",
  promo_code: "Promo code. Example: ILK20.",
  promo_code_not_available: "Promo code is not available for the selected address.",
  required: "Required parameter was not provided.",
  required_auth_token: "X-DV-Auth-Token header is missing.",
  return_point: "Return point for failed delivery.",
  standard: "Standard delivery.",
  status: "Order status filter. Example: available.",
  testUrl: "Use https://robotapitest.banabikurye.com/api/business/1.8 for test requests.",
  timestamp: "Example: 2026-05-21T13:14:34+03:00.",
  total_weight_kg: "Total weight in kilograms. Required for end-of-day orders.",
  type: "Order type. Default value is standard.",
  vehicle_type_id: "Vehicle type. Default is 8 for standard orders; prohibited for end-of-day orders."
};

const PARAMETER_DESCRIPTIONS_EN_BY_ENDPOINT = {
  "labels:type": "Label type: zpl or pdf.",
  "order-callback:event_type": "order_created or order_changed.",
  "delivery-callback:event_type": "delivery_created or delivery_changed.",
  "changelog-1-6:checkin_code": "Arrival PIN code used in the point and delivery model."
};

const state = {
  apiData: null,
  endpoints: [],
  selectedEndpointId: "",
  selectedLanguage: "curl",
  searchTerm: "",
  currentLang: I18N[localStorage.getItem("docsLang")] ? localStorage.getItem("docsLang") : "tr"
};

const nodes = {
  apiVersion: document.querySelector("#apiVersion"),
  apiTitle: document.querySelector("#apiTitle"),
  apiDescription: document.querySelector("#apiDescription"),
  apiMeta: document.querySelector("#apiMeta"),
  apiSearch: document.querySelector("#apiSearch"),
  langButtons: document.querySelectorAll("[data-doc-lang]"),
  searchLabel: document.querySelector("[data-i18n='searchLabel']"),
  codeHeaderTitle: document.querySelector("[data-i18n='requestSamples']"),
  sidebarNav: document.querySelector("#sidebarNav"),
  endpointContent: document.querySelector("#endpointContent"),
  languagePills: document.querySelector("#languagePills"),
  codeExamples: document.querySelector("#codeExamples")
};

function t(key) {
  return I18N[state.currentLang]?.[key] ?? I18N.tr[key] ?? key;
}

function getLocale() {
  return state.currentLang === "tr" ? "tr" : "en";
}

function localizedCategoryName(name) {
  return I18N[state.currentLang]?.categoryNames?.[name] || name;
}

function localizedEndpointDescription(endpoint) {
  return I18N[state.currentLang]?.endpointDescriptions?.[endpoint.id] || endpoint.description;
}

function localizedParameterDescription(parameter, endpoint) {
  if (state.currentLang !== "en") return parameter.description;

  const endpointKey = endpoint ? `${endpoint.id}:${parameter.name}` : "";

  return (
    PARAMETER_DESCRIPTIONS_EN_BY_ENDPOINT[endpointKey] ||
    PARAMETER_DESCRIPTIONS_EN[parameter.name] ||
    parameter.description
  );
}

function localizedResponseLabel(label) {
  if (state.currentLang !== "tr") return label;

  const labels = {
    Successful: "Başarılı",
    "Bad Request": "Hatalı İstek"
  };

  return labels[label] || label;
}

function renderStaticLabels() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("apiTitle");

  nodes.searchLabel.textContent = t("searchLabel");
  nodes.apiSearch.placeholder = t("searchPlaceholder");
  nodes.codeHeaderTitle.textContent = t("requestSamples");

  nodes.langButtons.forEach((button) => {
    const isSelected = button.dataset.docLang === state.currentLang;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderAll() {
  if (!state.apiData) return;

  renderStaticLabels();
  renderMeta(state.apiData);
  renderNavigation(state.apiData.categories);
  renderEndpointContent();
  renderCodePanel();
  applySearchFilter();
}

function setLanguage(lang) {
  if (!I18N[lang] || lang === state.currentLang) return;

  state.currentLang = lang;
  localStorage.setItem("docsLang", lang);
  renderAll();
}

async function loadApiData() {
  const response = await fetch("api-data.json");

  if (!response.ok) {
    throw new Error("api-data.json okunamadı.");
  }

  return response.json();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeMethod(method) {
  return METHOD_CLASS[method] || "neutral";
}

function flattenEndpoints(categories) {
  return categories.flatMap((category) =>
    category.items.map((endpoint) => ({
      ...endpoint,
      category: category.name
    }))
  );
}

function renderMeta(data) {
  nodes.apiVersion.textContent = data.version;
  nodes.apiTitle.textContent = t("apiTitle");
  nodes.apiDescription.textContent = t("apiDescription");
  nodes.apiMeta.innerHTML = `
    <span>${escapeHtml(t("test"))}: <code>${escapeHtml(data.baseUrls.test)}</code></span>
    <span>${escapeHtml(t("auth"))}: <code>${escapeHtml(data.auth.header)}</code></span>
    <span><a href="${escapeHtml(data.resources?.officialDocs || "https://banabikurye.com/business-api/doc")}" target="_blank" rel="noreferrer">${escapeHtml(t("officialDocs"))}</a></span>
  `;
}

function renderNavigation(categories) {
  nodes.sidebarNav.innerHTML = categories
    .map(
      (category) => `
        <p class="nav-title">${escapeHtml(localizedCategoryName(category.name))}</p>
        ${category.items
          .map(
            (item) => `
              <a
                class="nav-link ${item.id === state.selectedEndpointId ? "active" : ""}"
                href="#${escapeHtml(item.id)}"
                data-endpoint-id="${escapeHtml(item.id)}"
              >
                <span class="nav-method method ${normalizeMethod(item.method)}">${escapeHtml(item.method)}</span>
                <span class="nav-endpoint">${escapeHtml(item.endpoint.replace(`${item.method} `, ""))}</span>
              </a>
            `
          )
          .join("")}
      `
    )
    .join("");
}

function endpointSearchText(endpoint) {
  return [
    localizedCategoryName(endpoint.category),
    endpoint.endpoint,
    endpoint.method,
    endpoint.description,
    localizedEndpointDescription(endpoint),
    ...(endpoint.parameters || []).flatMap((parameter) => [
      parameter.name,
      parameter.type,
      parameter.description,
      localizedParameterDescription(parameter, endpoint)
    ])
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase(getLocale());
}

function endpointMatchesSearch(endpoint) {
  const term = state.searchTerm.trim().toLocaleLowerCase(getLocale());

  if (!term) return true;

  return endpointSearchText(endpoint).includes(term);
}

function applySearchFilter() {
  const matchingIds = new Set(
    state.endpoints.filter(endpointMatchesSearch).map((endpoint) => endpoint.id)
  );

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.hidden = !matchingIds.has(link.dataset.endpointId);
  });

  document.querySelectorAll(".nav-title").forEach((title) => {
    const links = [];
    let current = title.nextElementSibling;

    while (current && !current.classList.contains("nav-title")) {
      if (current.classList.contains("nav-link")) links.push(current);
      current = current.nextElementSibling;
    }

    title.hidden = links.length > 0 && links.every((link) => link.hidden);
  });

  document.querySelectorAll(".doc-section.endpoint").forEach((section) => {
    section.hidden = !matchingIds.has(section.id);
  });
}

function renderParameterRows(parameters, endpoint) {
  if (!parameters.length) {
    return `
      <tr>
        <td colspan="4">${escapeHtml(t("noParameters"))}</td>
      </tr>
    `;
  }

  return parameters
    .map(
      (parameter) => `
        <tr>
          <td><code>${escapeHtml(parameter.name)}</code></td>
          <td>${escapeHtml(parameter.type)}</td>
          <td>${parameter.required ? escapeHtml(t("yes")) : escapeHtml(t("no"))}</td>
          <td>${escapeHtml(localizedParameterDescription(parameter, endpoint))}</td>
        </tr>
      `
    )
    .join("");
}

function renderSchemaFields(fields = [], level = 0) {
  if (!fields.length) {
    return `<div class="schema-empty-row">${escapeHtml(t("noSchemaFields"))}</div>`;
  }

  return fields
    .map((field) => {
      const hasChildren = Array.isArray(field.children) && field.children.length > 0;

      return `
        <div class="schema-row" style="--schema-level: ${level}">
          <div class="schema-name">
            <span class="schema-branch" aria-hidden="true"></span>
            <span class="schema-key">${escapeHtml(field.name)}</span>
            ${hasChildren ? `<span class="schema-caret" aria-hidden="true">›</span>` : ""}
          </div>
          <div class="schema-type">
            ${escapeHtml(field.type)}
            ${field.description ? `<small>${escapeHtml(field.description)}</small>` : ""}
          </div>
        </div>
        ${hasChildren ? `<div class="schema-children">${renderSchemaFields(field.children, level + 1)}</div>` : ""}
      `;
    })
    .join("");
}

function renderResponses(endpoint) {
  const response = endpoint.responses;

  if (!response) {
    return `
      <section class="responses-section">
        <h3>${escapeHtml(t("responses"))}</h3>
        <div class="response-empty">${escapeHtml(t("noResponseSchema"))}</div>
      </section>
    `;
  }

  return `
    <section class="responses-section collapsed">
      <h3>${escapeHtml(t("responses"))}</h3>
      <button
        class="response-status"
        type="button"
        aria-expanded="false"
        data-response-toggle
      >
        <span class="response-chevron" aria-hidden="true">⌄</span>
        <strong>${escapeHtml(response.status)}</strong>
        <span>${escapeHtml(localizedResponseLabel(response.label))}</span>
      </button>
      <div class="response-body" data-response-body>
        <div class="schema-meta">
          <span>${escapeHtml(t("responseSchema"))}</span>
          <strong>${escapeHtml(response.contentType || "*/*")}</strong>
        </div>
        <div class="schema-tree">
          <div class="schema-root">${escapeHtml(response.schemaType || "object")} ${response.schemaType === "Array" ? "[" : "{"}</div>
          ${renderSchemaFields(response.fields || [])}
          <div class="schema-root">${response.schemaType === "Array" ? "]" : "}"}</div>
        </div>
      </div>
    </section>
  `;
}

function renderEndpointContent() {
  nodes.endpointContent.innerHTML = state.endpoints
    .map(
      (endpoint) => `
        <section class="doc-section endpoint" id="${escapeHtml(endpoint.id)}">
          <div class="section-heading">
            <span class="method ${normalizeMethod(endpoint.method)}">${escapeHtml(endpoint.method)}</span>
            <h2>${escapeHtml(endpoint.endpoint)}</h2>
          </div>
          <p>${escapeHtml(localizedEndpointDescription(endpoint))}</p>
          ${isRunnableEndpoint(endpoint) ? `<button class="try-button" type="button" data-try-endpoint-id="${escapeHtml(endpoint.id)}">${escapeHtml(t("tryIt"))}</button>` : ""}

          <h3>${escapeHtml(t("parameters"))}</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>${escapeHtml(t("parameter"))}</th>
                  <th>${escapeHtml(t("type"))}</th>
                  <th>${escapeHtml(t("required"))}</th>
                  <th>${escapeHtml(t("description"))}</th>
                </tr>
              </thead>
              <tbody>
                ${renderParameterRows(endpoint.parameters || [], endpoint)}
              </tbody>
            </table>
          </div>
          ${renderResponses(endpoint)}
        </section>
      `
    )
    .join("");
}

function getSelectedEndpoint() {
  return (
    state.endpoints.find((endpoint) => endpoint.id === state.selectedEndpointId) ||
    state.endpoints[0]
  );
}

function renderLanguagePills(endpoint) {
  const languages = Object.keys(endpoint.codeSnippets || {});

  if (!languages.includes(state.selectedLanguage)) {
    state.selectedLanguage = languages[0] || "curl";
  }

  nodes.languagePills.innerHTML = languages
    .map(
      (language) => `
        <button
          type="button"
          class="${language === state.selectedLanguage ? "selected" : ""}"
          data-language="${escapeHtml(language)}"
        >
          ${escapeHtml(LANGUAGE_LABELS[language] || language)}
        </button>
      `
    )
    .join("");
}

function renderCodePanel() {
  const endpoint = getSelectedEndpoint();

  if (!endpoint) {
    nodes.codeExamples.innerHTML = "";
    return;
  }

  renderLanguagePills(endpoint);

  const snippet = endpoint.codeSnippets?.[state.selectedLanguage] || "";
  const prismLanguage = PRISM_LANGUAGES[state.selectedLanguage] || state.selectedLanguage;

  nodes.codeExamples.innerHTML = `
    <article class="code-card collapsed" data-code-card>
      <div class="sample-tabs" aria-label="Request sample type">
        <button type="button" class="sample-tab active">${escapeHtml(t("payload"))}</button>
      </div>
      <div class="sample-meta">
        <span>${escapeHtml(t("contentType"))}</span>
        <strong>application/json</strong>
      </div>
      <div class="sample-actions" aria-label="Code actions">
        <button type="button" data-code-action="copy">${escapeHtml(t("copy"))}</button>
        <button type="button" data-code-action="expand">${escapeHtml(t("expandAll"))}</button>
        <button type="button" data-code-action="collapse">${escapeHtml(t("collapseAll"))}</button>
      </div>
      <pre><code class="language-${escapeHtml(prismLanguage)}" data-code-content>${escapeHtml(snippet)}</code></pre>
    </article>
    ${renderTryItOut(endpoint)}
  `;

  highlightCode();
  setCodeSampleCollapsed(true);
}

function isRunnableEndpoint(endpoint) {
  return (endpoint.method === "GET" || endpoint.method === "POST") && Boolean(getEndpointPath(endpoint));
}

function getEndpointPath(endpoint) {
  const parts = endpoint.endpoint.split(" ");

  return parts.length > 1 && parts[1].startsWith("/") ? parts[1] : "";
}

function extractCurlData(snippet) {
  if (!snippet) return "";

  const dataMatch = snippet.match(/--data\s+'([\s\S]*?)'\s+\\?\n?\s*'https?:\/\//);

  if (!dataMatch) return "";

  try {
    return JSON.stringify(JSON.parse(dataMatch[1]), null, 2);
  } catch {
    return dataMatch[1];
  }
}

function getDefaultBody(endpoint) {
  if (endpoint.method !== "POST") return "";

  return extractCurlData(endpoint.codeSnippets?.curl || "");
}

function getDefaultQuery(endpoint) {
  const curlSnippet = endpoint.codeSnippets?.curl || "";
  const urlMatch = curlSnippet.match(/https?:\/\/[^'"\s]+/);

  if (!urlMatch) return "{}";

  const query = urlMatch[0].split("?")[1];

  if (!query) return "{}";

  const params = new URLSearchParams(query);
  const queryObject = {};

  params.forEach((value, key) => {
    const cleanKey = key.endsWith("[]") ? key.slice(0, -2) : key;

    if (queryObject[cleanKey]) {
      queryObject[cleanKey] = Array.isArray(queryObject[cleanKey])
        ? [...queryObject[cleanKey], value]
        : [queryObject[cleanKey], value];
      return;
    }

    queryObject[cleanKey] = value;
  });

  return JSON.stringify(queryObject, null, 2);
}

function renderTryItOut(endpoint) {
  if (!isRunnableEndpoint(endpoint)) {
    return `
      <article class="try-card">
        <h2>${escapeHtml(t("tryIt"))}</h2>
        <p>${escapeHtml(t("tryNotAvailable"))}</p>
      </article>
    `;
  }

  return `
    <article class="try-card" data-try-card>
      <div class="try-card-head">
        <h2>${escapeHtml(t("tryIt"))}</h2>
        <span class="method ${normalizeMethod(endpoint.method)}">${escapeHtml(endpoint.method)}</span>
      </div>
      <p class="try-note">${escapeHtml(t("testOnlyNotice"))}</p>
      <label>
        <span>${escapeHtml(t("environment"))}</span>
        <input data-try-env type="text" value="${escapeHtml(t("test"))}" readonly />
      </label>
      <label>
        <span>${escapeHtml(t("token"))}</span>
        <input data-try-token type="password" placeholder="SECRET_AUTH_TOKEN" autocomplete="off" />
      </label>
      ${endpoint.method === "GET" ? `
        <label>
          <span>${escapeHtml(t("queryJson"))}</span>
          <textarea data-try-query spellcheck="false">${escapeHtml(getDefaultQuery(endpoint))}</textarea>
        </label>
      ` : `
        <label>
          <span>${escapeHtml(t("bodyJson"))}</span>
          <textarea data-try-body spellcheck="false">${escapeHtml(getDefaultBody(endpoint))}</textarea>
        </label>
      `}
      <button class="send-button" type="button" data-try-send="${escapeHtml(endpoint.id)}">${escapeHtml(t("sendRequest"))}</button>
      <pre class="try-response"><code data-try-response>${escapeHtml(t("noRequestYet"))}</code></pre>
    </article>
  `;
}

function buildUrl(endpoint, card) {
  const baseUrl = state.apiData.baseUrls.test;
  const url = new URL(`${baseUrl}${getEndpointPath(endpoint)}`);

  if (endpoint.method === "GET") {
    const queryText = card.querySelector("[data-try-query]").value.trim();
    const queryObject = queryText ? JSON.parse(queryText) : {};

    Object.entries(queryObject).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => url.searchParams.append(`${key}[]`, item));
        return;
      }

      if (value !== null && value !== undefined && value !== "") {
        url.searchParams.set(key, value);
      }
    });
  }

  return url;
}

async function sendTryItOut(endpointId) {
  const endpoint = state.endpoints.find((item) => item.id === endpointId);
  const card = nodes.codeExamples.querySelector("[data-try-card]");
  const responseNode = card?.querySelector("[data-try-response]");

  if (!endpoint || !card || !responseNode) return;

  try {
    const token = card.querySelector("[data-try-token]").value.trim();

    if (!token) {
      responseNode.textContent = t("tokenRequired");
      return;
    }

    const url = buildUrl(endpoint, card);
    const options = {
      method: endpoint.method,
      headers: {
        "X-DV-Auth-Token": token
      }
    };

    if (endpoint.method === "POST") {
      const bodyText = card.querySelector("[data-try-body]").value.trim();
      options.headers["Content-Type"] = "application/json";
      options.body = bodyText ? JSON.stringify(JSON.parse(bodyText)) : "{}";
    }

    responseNode.textContent = t("sending");

    const response = await fetch(url, options);
    const text = await response.text();
    let body = text;

    try {
      body = JSON.stringify(JSON.parse(text), null, 2);
    } catch {
      body = text || "(boş yanıt)";
    }

    responseNode.textContent = `HTTP ${response.status} ${response.statusText}\n\n${body}`;
  } catch (error) {
    responseNode.textContent = [
      t("requestFailed"),
      "",
      error.message,
      "",
      t("corsNote")
    ].join("\n");
  }
}

async function copyCodeSample(button) {
  const code = nodes.codeExamples.querySelector("[data-code-content]")?.textContent || "";

  if (!code) return;

  try {
    await navigator.clipboard.writeText(code);
    button.textContent = t("copied");
    window.setTimeout(() => {
      button.textContent = t("copy");
    }, 1200);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = code;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    button.textContent = t("copied");
    window.setTimeout(() => {
      button.textContent = t("copy");
    }, 1200);
  }
}

function setCodeSampleCollapsed(shouldCollapse) {
  const card = nodes.codeExamples.querySelector("[data-code-card]");
  const pre = card?.querySelector("pre");

  if (!card || !pre) return;

  card.classList.toggle("collapsed", shouldCollapse);
  pre.style.maxHeight = shouldCollapse ? "74px" : `${pre.scrollHeight}px`;
  pre.style.overflow = shouldCollapse ? "hidden" : "visible";

  nodes.codeExamples.querySelectorAll("[data-code-action]").forEach((button) => {
    const isActive =
      (shouldCollapse && button.dataset.codeAction === "collapse") ||
      (!shouldCollapse && button.dataset.codeAction === "expand");

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function highlightCode() {
  if (!window.Prism) return;

  window.Prism.highlightAllUnder(nodes.codeExamples);
}

function setSelectedEndpoint(endpointId) {
  state.selectedEndpointId = endpointId;

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.endpointId === endpointId);
  });

  renderCodePanel();
}

function bindEvents() {
  nodes.sidebarNav.addEventListener("click", (event) => {
    const link = event.target.closest("[data-endpoint-id]");

    if (!link) return;

    setSelectedEndpoint(link.dataset.endpointId);
  });

  nodes.languagePills.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");

    if (!button) return;

    state.selectedLanguage = button.dataset.language;
    renderCodePanel();
  });

  nodes.apiSearch.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    applySearchFilter();
  });

  nodes.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.docLang);
    });
  });

  nodes.endpointContent.addEventListener("click", (event) => {
    const responseToggle = event.target.closest("[data-response-toggle]");

    if (responseToggle) {
      const section = responseToggle.closest(".responses-section");
      const isCollapsed = section.classList.toggle("collapsed");

      responseToggle.setAttribute("aria-expanded", String(!isCollapsed));
      return;
    }

    const button = event.target.closest("[data-try-endpoint-id]");

    if (!button) return;

    setSelectedEndpoint(button.dataset.tryEndpointId);
    document.querySelector(".code-panel")?.scrollIntoView({ block: "start" });
  });

  nodes.codeExamples.addEventListener("click", (event) => {
    const codeAction = event.target.closest("[data-code-action]");

    if (codeAction) {
      const action = codeAction.dataset.codeAction;

      if (action === "copy") copyCodeSample(codeAction);
      if (action === "expand") setCodeSampleCollapsed(false);
      if (action === "collapse") setCodeSampleCollapsed(true);
      return;
    }

    const button = event.target.closest("[data-try-send]");

    if (!button) return;

    sendTryItOut(button.dataset.trySend);
  });
}

function renderError(error) {
  renderStaticLabels();

  nodes.endpointContent.innerHTML = `
    <section class="doc-section">
      <div class="section-heading">
        <span class="method delete">ERR</span>
        <h2>${escapeHtml(t("dataLoadError"))}</h2>
      </div>
      <p>${escapeHtml(error.message)}</p>
      <div class="notice">
        ${escapeHtml(t("dataLoadHint"))}
      </div>
    </section>
  `;
}

async function init() {
  try {
    const data = await loadApiData();

    state.apiData = data;
    state.endpoints = flattenEndpoints(data.categories);
    state.selectedEndpointId = window.location.hash.replace("#", "") || state.endpoints[0]?.id || "";

    bindEvents();
    renderAll();

    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }
  } catch (error) {
    renderError(error);
  }
}

init();
