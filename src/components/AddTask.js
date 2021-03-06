import React, { Component } from 'react';

class AddTask extends Component
{
	handleSubmit = ( e ) => {
		e.preventDefault();

		if( this.newTask.value.trim() !== '' ) {
			this.props.onAddTask(this.newTask.value);
			this.props.history.push('/home');
		}
	}

	render() {
		return (
			<section>
				<h1 className="m-3">Nouvelle tâche</h1>
				<div className="card m-3">
					<form className="card-body" onSubmit={ ( e ) => this.handleSubmit( e ) }>
						<div className="form-group">
							<label form="taskName">Nom de la tâche</label>
							<input type="text" className="form-control" name="taskName" id="taskName" required ref={ input => this.newTask = input } />
						</div>
						<button type="submit" className="btn btn-primary mt-2">Créer</button>
					</form>
				</div>
			</section>
		);
	}
}

export default AddTask;