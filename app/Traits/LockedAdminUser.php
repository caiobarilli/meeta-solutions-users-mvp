<?php

namespace App\Traits;

use Illuminate\Validation\ValidationException;

trait LockedAdminUser
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !$this->route('user')->isAdmin();
    }

    public function failedAuthorization()
    {
        $this->session()->flash('error', 'Editar o usuario adminstrador não é permitido.');

        // Note: This is required, otherwise demo user will update
        // and both, success and error messages will be returned.
        throw ValidationException::withMessages([]);
    }
}
