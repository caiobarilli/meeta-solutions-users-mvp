<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use App\Http\Requests\UserDeleteRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;

class UsersController extends Controller
{
    public function index()
    {
        $this->authorize('users-list');

        return Inertia::render('Users/Index', [
            'users' => new UserCollection(
                User::all()
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('users-create');
        return Inertia::render('Users/Create');
    }

    public function store(UserStoreRequest $request)
    {
        $this->authorize('users-create');

        Auth::user()->account->users()->create(
            $request->validated()
        )->assignRole('user');

        return Redirect::route('users')->with('success', 'Usuário criado.');
    }

    public function edit(User $user)
    {
        $this->authorize('users-edit');

        return Inertia::render('Users/Edit', [
            'user' => new UserResource($user),
        ]);
    }

    public function update(User $user, UserUpdateRequest $request)
    {
        $this->authorize('users-edit');

        $user->update(
            $request->validated()
        );

        if ($request->role) {
            switch ($request->role) {
                case 'owner':
                    if (!$user->hasAnyRole(['owner'])) {
                        $user->assignRole('owner');
                    }
                    return Redirect::back()->with('success', 'Usuário atualizado.');
                    break;
                case 'user':
                    if ($user->hasAnyRole(['owner'])) {
                        $user->removeRole('owner');
                        $user->assignRole('user');
                    }

                    return Redirect::back()->with('success', 'Usuário atualizado.');
                    break;

                default:
                return Redirect::back()->with('error', 'Cargo desconhecido.');
                    break;
            }
        }

        return Redirect::back()->with('success', 'Usuário atualizado.');
    }

    public function destroy(User $user, UserDeleteRequest $request)
    {
        $this->authorize('users-delete');

        if ($user->isAdmin()) {
            return Redirect::back()->with('error', 'Deletar o usuário adminstrador não é permitido.');
        }

        $user->delete();

        return Redirect::back()->with('success', 'Usuário apagado.');
    }

    public function restore(User $user)
    {
        $this->authorize('users-delete');
        $user->restore();

        return Redirect::back()->with('success', 'Usuário recuperado.');
    }
}
