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
    tryNotAvailable: "Bu bölüm bilgilendirme veya akış açıklaması olduğu için canlı istek desteklenmiyor.",
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
    tryNotAvailable: "Live requests are not available for informational or flow sections.",
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
      labels: "Returns package labels in ZPL or PDF format."
    }
  }
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
    <span>${escapeHtml(t("production"))}: <code>${escapeHtml(data.baseUrls.production)}</code></span>
    <span>${escapeHtml(t("auth"))}: <code>${escapeHtml(data.auth.header)}</code></span>
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
      parameter.description
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

function renderParameterRows(parameters) {
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
          <td>${escapeHtml(parameter.description)}</td>
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
                ${renderParameterRows(endpoint.parameters || [])}
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
    <article class="code-card" data-code-card>
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
}

function isRunnableEndpoint(endpoint) {
  return endpoint.method === "GET" || endpoint.method === "POST";
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
      <label>
        <span>${escapeHtml(t("environment"))}</span>
        <select data-try-env>
          <option value="test">${escapeHtml(t("test"))}</option>
          <option value="production">${escapeHtml(t("production"))}</option>
        </select>
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
  const environment = card.querySelector("[data-try-env]").value;
  const baseUrl = state.apiData.baseUrls[environment];
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

  if (!card) return;

  card.classList.toggle("collapsed", shouldCollapse);
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
