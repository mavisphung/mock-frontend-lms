var dataTable;

$(document).ready(function() {
  dataTable = $('#myTable').DataTable({
    "ajax": {
      "url": "/admin/users/"
    },
    "columns" : [

      {"data": "id"},
      {"data": "username"},
      {"data": "firstName"},
      {"data": "lastName"},
      {"data": "email"},
      {"data": "address"},
      {"data": "roles"},
      {"data": "username"},
      {
        "data": "username",
        "render": function(data) {
          return `
            <form th:action="@{/admin/enable}" method="post">
							<input hidden th:name="username" th:value="${user.username}">
							<span th:if="${user.enabled}" class="me-1">
								<button class="btn btn-secondary">
									<i class="fa fa-unlock"></i>
								</button>
							</span> <span th:if="${!user.enabled}" class="me-1">
								<button class="btn btn-warning">
									<i class="fa fa-lock"></i>
								</button>
							</span>
						</form>
						<form th:action="@{/admin/delete}" method="post">
							<input hidden th:name="username" th:value="${user.username}">
							<button class="btn btn-danger">
								<i class="fa fa-trash"></i>
							</button>
						</form>
          `;
        }
      }
    ]
  });
});
