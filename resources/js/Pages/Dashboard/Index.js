import React from 'react';
import LayoutDashboard from '@/Shared/LayoutDashboard';

const Index = () => {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">...</li>
      </ol>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">Primary Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <p className="small text-white stretched-link">View Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <LayoutDashboard title="Acessar MVP" children={page} />;

export default Index;
