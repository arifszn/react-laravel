<nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <img src="{{ asset('assets/images/faces/face1.jpg') }}" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">{{Auth::user()->name}}</span>
                  {{-- <span class="text-secondary text-small">Project Manager</span> --}}
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ route('Dashboard') }}">
                <span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#lead-routes" aria-expanded="false" aria-controls="lead-routes">
                <span class="menu-title">Leads</span>
                <i class="menu-arrow"></i>
                <i class="mdi mdi-account-multiple menu-icon"></i>
              </a>
              <div class="collapse" id="lead-routes">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item"> <a class="nav-link" href="{{ route('Leads') }}">All Leads</a></li>
                  {{-- <li class="nav-item"> <a class="nav-link" href="#">Typography</a></li> --}}
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/arifszn/react-router-laravel-crud-practice" target="_blank">
                <span class="menu-title">Source</span>
                <i class="mdi mdi-github-circle menu-icon"></i>
              </a>
            </li>
          </ul>
        </nav>